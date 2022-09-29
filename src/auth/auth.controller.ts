import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserLoginDto } from "./dto/user-login.dto";
import { AddCustomerDto } from "../customers/dto/add-customer.dto";

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }


  @Post('/login')
  login(@Body() dto: UserLoginDto) {
    return this.authService.login(dto);
  }

  @Post('/registration')
  register(@Body() dto: AddCustomerDto) {

  return this.authService.register(dto)
  }


}
