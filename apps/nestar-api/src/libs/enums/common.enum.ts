import { registerEnumType } from '@nestjs/graphql';

export enum Message {
	SOMETHING_WENT_WRONG = 'Something went wrong!',
	NO_DATA_FOUND = 'No data found!',
	CREATE_FAILED = 'Creation failed!',
	UPDATE_FAILED = 'Update failed!',
	REMOVE_FAILED = 'Removal failed!',
	UPLOAD_FAILED = 'Upload failed!',
	BAD_REQUEST = 'Bad Request!',

	USED_MEMBER_NICK_OR_PHONE = 'Already used member nick or phone',
	NO_MEMBER_NICK = 'No member with that member nick!',
	BLOCKED_USER = 'This user has been blocked!',
	WRONG_PASSWORD = 'Incorrect password, please try again!',
	NOT_AUTHENTICATED = 'Authentication required, please log in first!',
	TOKEN_NOT_EXIST = 'Bearer token is missing!',
	ONLY_SPECIFIC_ROLES_ALLOWED = 'Access restricted to specific roles!',
	NOT_ALLOWED_REQUEST = 'This request is not allowed!',
	ALLOWED_FORMATS_ONLY = 'Please upload images in jpg, jpeg, or png format!',
	SELF_SUBSCRIPTION_DENIED = 'Self-subscription is not permitted!',
	PROVIDE_ALLOWED_FORMAT = "PROVIDE_ALLOWED_FORMAT",
}

export enum Direction {
	ASC = 1,
	DESC = -1,
}

registerEnumType(Direction, {
	name: 'Direction',
});
