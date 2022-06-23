import { Restaurant } from './entities/restaurants.entity';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver(of => Restaurant)
export class RestaurantsResolver {
  @Query(returns => Restaurant)
  myRestaurant() {
      return true;
  }
}
