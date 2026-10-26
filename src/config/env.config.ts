export const EnvConfig = () => ({
    app: { node: process.env.NODE_ENV || 'development'},
    database: {
        type: 'postgres',
        port: Number(process.env.POSTGRES_PORT ?? 5432),
        host: process.env.POSTGRES_HOST || 'localhost',
        username: process.env.POSTGRES_USERNAME || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'postgres123',
        database: process.env.POSTGRES_DB || 'viajes',
        synchronize: true,
    },
});