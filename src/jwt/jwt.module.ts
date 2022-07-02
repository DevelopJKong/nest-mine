import { CONFIG_OPTIONS } from './../common/common.constants';
import { Global, Module, DynamicModule } from '@nestjs/common';
import { JwtModuleOptions } from './jwt.interface';
import { JwtService } from './jwt.service';

@Module({})
@Global()
export class JwtModule {
    static forRoot(options:JwtModuleOptions):DynamicModule {
        return {
            module:JwtModule,
            providers: [
                {
                    provide:CONFIG_OPTIONS,
                    useValue:options
                },
                JwtService
            ],
            exports:[JwtService]
        }
    }
}
