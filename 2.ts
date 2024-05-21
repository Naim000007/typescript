// 1. Advanced Types and Conditional Types
type UserRole = 'admin' | 'user';

interface BaseUser {
    id: number;
    name: string;
}

interface AdminUser extends BaseUser {
    role: 'admin';
    permissions: string[];
}

interface RegularUser extends BaseUser {
    role: 'user';
}

type User = AdminUser | RegularUser;

type UserPermissions<T extends User> = T extends AdminUser ? string[] : never;

// 2. Decorators for Logging
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments:`, args);
        const result = await originalMethod.apply(this, args);
        console.log(`${propertyKey} returned:`, result);
        return result;
    };
    return descriptor;
}

