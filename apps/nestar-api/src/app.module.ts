import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { ComponentsModule } from './component/components.module';
import { MemberModule } from './component/member/member.module';
import { PropertyModule } from './component/property/property.module';
import { DatabaseModule } from './database/database.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		GraphQLModule.forRoot({ driver: ApolloDriver, playground: true, uploads: false, autoSchemaFile: true, }),
		ComponentsModule,
		MemberModule,
		PropertyModule,
		DatabaseModule,
	],
	controllers: [AppController],
	providers: [AppService, AppResolver],
})
export class AppModule {}
