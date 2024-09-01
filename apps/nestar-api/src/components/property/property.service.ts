import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Property } from '../../libs/dto/property/property';
import { Message } from '../../libs/enums/common.enum';
import { PropertyInput } from '../../libs/dto/property/property.input';
import { MemberService } from '../member/member.service';
import { PropertyUpdate } from '../../libs/dto/property/property.update';
import { T } from '../../libs/types/common';
import { PropertyStatus } from '../../libs/enums/property.enum';
import moment from 'moment';

@Injectable()
export class PropertyService {
	constructor(
		@InjectModel('Property') private readonly propertyModel: Model<Property>,
		private memberService: MemberService,
	) {}

	public async createProperty(input: PropertyInput): Promise<Property> {
		try {
			const result = await this.propertyModel.create(input); // schema validation from DB, try catch is for this alone
			await this.memberService.memberStatsEditor({ _id: result.memberId, targetKey: 'memberProperties', modifier: 1 });
			return result;
		} catch (err) {
			console.log('Error, Property.model:', err.message);
			throw new BadRequestException(Message.CREATE_FAILED);
		}
	}

	
	public async updateProperty(memberId: ObjectId, input: PropertyUpdate): Promise<Property> {
		let { propertyStatus, soldAt, deletedAt } = input;
		const search: T = {
			_id: input._id,
			memberId: memberId,
			propertyStatus: PropertyStatus.ACTIVE
		};
		if (propertyStatus === PropertyStatus.SOLD) soldAt = moment().toDate();
		else if (propertyStatus === PropertyStatus.DELETE) deletedAt = moment().toDate();
	
		const result = await this.propertyModel.findOneAndUpdate(search, input, {
			new: true,
		}).exec();
		if (!result) throw new InternalServerErrorException(Message.UPDATE_FAILED);

		if (soldAt || deletedAt) {
			await this.memberService.memberStatsEditor({
				_id: memberId,
				targetKey: 'memberProperties',
				modifier: -1,
			});
		}
		return result;
	}
}
