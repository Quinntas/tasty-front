import {boolean, decimal, integer, pgTable, serial, text, timestamp, varchar} from 'drizzle-orm/pg-core';
import {v4} from "uuid";

const baseColumns = {
    id: serial('id').primaryKey(),
    pid: varchar('pid', {length: 191}).$defaultFn(() => v4()),
    createdAt: timestamp('createdAt', {mode: 'date', withTimezone: true}).defaultNow().notNull(),
    updatedAt: timestamp('updatedAt', {
        mode: 'date',
        withTimezone: true
    }).defaultNow().notNull().$onUpdateFn(() => new Date()),
}

export const userTable = pgTable('users', {
    ...baseColumns,
    avatar: text('avatar').notNull().default('https://i.imgur.com/WxNkK7J_d.webp?maxwidth=760&fidelity=grand'),
    phone: varchar('phone', {length: 191}).notNull().unique(),
    password: varchar('password', {length: 191}).notNull(),
    name: varchar('name', {length: 191}).notNull(),
    email: varchar('email', {length: 191}).notNull().unique(),
});

export const sessionTable = pgTable('sessions', {
    ...baseColumns,
    userId: integer('userId')
        .notNull()
        .references(() => userTable.id),
    expiresAt: timestamp('expiresAt', {
        withTimezone: true,
        mode: 'date',
    }).notNull(),
});

export const userAddressTable = pgTable('userAddresses', {
    ...baseColumns,
    userId: integer('userId')
        .notNull()
        .references(() => userTable.id),
    addressId: integer('addressId')
        .notNull()
        .references(() => addressTable.id),
    isDefault: boolean('isDefault').notNull().default(false),
});

export const addressTable = pgTable('addresses', {
    ...baseColumns,
    street: varchar('street', {length: 191}).notNull(),
    neighborhood: varchar('neighborhood', {length: 191}).notNull(),
    city: varchar('city', {length: 191}).notNull(),
    state: varchar('state', {length: 191}).notNull(),
    number: varchar('number', {length: 191}),
    zipCode: varchar('zipCode', {length: 191}).notNull(),
    complement: varchar('complement', {length: 191}),
    reference: varchar('reference', {length: 191}),
})

export const storeTable = pgTable('stores', {
    ...baseColumns,
    slug: varchar('slug', {length: 191}).notNull().unique(),
    banner: text('banner').notNull().default('https://i.imgur.com/WxNkK7J_d.webp?maxwidth=760&fidelity=grand'),
    logo: text('logo').notNull().default('https://i.imgur.com/WxNkK7J_d.webp?maxwidth=760&fidelity=grand'),
    name: varchar('name', {length: 191}).notNull(),
    description: text('description').notNull(),
    phone: varchar('phone', {length: 191}).notNull().unique(),
    addressId: integer('addressId')
        .notNull()
        .references(() => addressTable.id),
    minDeliveryTime: integer('minDeliveryTime').notNull(),
    maxDeliveryTime: integer('maxDeliveryTime').notNull(),
    deliveryFee: decimal('deliveryFee').notNull(),
    ownerId: integer('ownerId').references(() => userTable.id),
})
