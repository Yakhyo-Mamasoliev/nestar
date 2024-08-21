import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';

@Resolver()
@UsePipes(ValidationPipe) // Validating fro entire resolver
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	@Mutation(() => String) // type integration for GraphQL
	// @UsePipes(ValidationPipe) // Validating in just for one method // without this then input returns data
	public async signup(@Args('input') input: MemberInput): Promise<string> {
		// type integration for TS
		console.log('Mutation: signup');
		console.log('Input: ', input);
		return this.memberService.signup(); // ValidationType above is commented, then it returns. Cos it is being validation with ValidationPipe
	}

	@Mutation(() => String)
	@UsePipes(ValidationPipe)
	public async login(@Args('input') input: LoginInput): Promise<string> {
		// here should be try-catch but we do put it later not here but in app.module(in gql module as error handling) as global integration.
		console.log('Mutation: login');
		return this.memberService.login();
	}

	@Mutation(() => String)
	public async updateMember(): Promise<string> {
		console.log('Mutation: updateMember');
		return this.memberService.updateMember();
	}

	@Query(() => String)
	public async getMember(): Promise<string> {
		console.log('Query: getMember');
		return this.memberService.getMember();
	}
}
