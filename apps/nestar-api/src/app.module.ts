import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { DatabaseModule } from './database/database.module';
import { ComponentsModule } from './components/components.module';
import { T } from './libs/types/common';

@Module({
	imports: [
		ConfigModule.forRoot(),
		GraphQLModule.forRoot({
			driver: ApolloDriver,
			playground: true,
			uploads: false, // we rather use graphql-upload
			autoSchemaFile: true,
			formatError: (error: T) => {
				const graphQlFormattedError = {
					code: error?.extensions.code,
					message:
						error?.extensions?.exception?.response?.message || error?.extensions?.response?.message || error?.message,
				};
				console.log('GRAPHQL GLOBAL ERR:', graphQlFormattedError);
				return graphQlFormattedError; // ! server not to stuck
			},
		}),
		ComponentsModule,
		DatabaseModule,
	],
	controllers: [AppController], // working as REST API and GRAPHQL API
	providers: [AppService, AppResolver],
})
export class AppModule {}
