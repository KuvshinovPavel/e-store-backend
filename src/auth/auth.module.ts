import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { CustomersModule } from "../customers/customers.module";

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  exports: [
    AuthService, JwtModule
  ],
  imports: [
    forwardRef(() => CustomersModule),
    JwtModule.register({
      secret: process.env.SECRET_KEY || "SECRET_VALUE",
      signOptions: {
        expiresIn: 10000
      }
    })
  ]
})
export class AuthModule {}
