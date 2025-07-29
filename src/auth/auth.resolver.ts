import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponse } from './graphql/auth.type';
import { LoginInput } from './graphql/login.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResponse, { name: 'login' })
  async signIn(@Args('loginInput') loginInput: LoginInput): Promise<AuthResponse> {
    return this.authService.login(loginInput.email, loginInput.password);
  }

  @Query(() => String, { name: 'profile' })
  async getProfile(): Promise<string> {
    return 'User profile';
  }
} 