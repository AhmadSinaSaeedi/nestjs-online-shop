import { OrderItemEntity } from './order-items/order-item.entity';
import { Order, OrderItem, OrderItemInput } from './graphql';
import { OrderEntity } from './orders/orders.entity';
import { UserEntity } from './users/users.entity';
import { User, UserInput, OrderInput } from 'src/graphql';

export function mapUserToEntity(userInput: UserInput): UserEntity {
  return {
    name: userInput.name,
    email: userInput.email,
    profileImage: userInput.profileImage,
  };
}

export function mapUserEntityToDto(user: UserEntity): User {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    profileImage: user.profileImage,
  };
}

export function mapOrderToEntity(orderInput: OrderInput): OrderEntity {
  return {
    total: orderInput.total,
    userId: orderInput.user,
    // items: orderInput.items.map((i) => mapOrderItemToEntity(i)),
  };
}

export function mapOrderEntityToDto(order: OrderEntity): Order {
  return {
    id: order.id,
    // items: order.items.map((i) => mapOrderItemEntityToDto(i)),
    total: order.total,
    user: order.user,
  };
}

export function mapOrderItemToEntity(
  orderItemInput: OrderItemInput,
): OrderItemEntity {
  return {
    productId: orderItemInput.productId,
    price: orderItemInput.price,
    quantity: orderItemInput.quantity,
  };
}

export function mapOrderItemEntityToDto(orderItem: OrderItemEntity): OrderItem {
  return {
    id: orderItem.id,
    product: orderItem.product,
    price: orderItem.price,
    quantity: orderItem.quantity,
  };
}
