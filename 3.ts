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
