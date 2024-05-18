const {z} = require('zod');

//Create Schema

const signUpSchema = z.object({
    username: z
        .string({ required_error: "Name is Require" })
        .trim()
        .min(3, { message: "Name must be min. 3 charactors." })
        .max(200, { message: "Name must not be more than 200 charactors." }),

    email: z
        .string({ required_error: "Name is Require" })
        .trim()
        .email({ message: "Email is Require" })
        .min(10, { message: "Email must be min. 10 charactors." })
        .max(200, { message: "Email must not be more than 200 charactors." }),

    phone: z
        .string({ required_error: "Phone is Require" })
        .trim()
        .min(10, { message: "Phone must be min. 10 charactors." })
        .max(20, { message: "Phone must not be more than 20 charactors." }),

    Password: z
        .string({ required_error: "Password is Require" })
        .min(6, { message: "Password must be min. 6 charactors." })
        .max(1024, { message: "Password must not be more than 1024 charactors." }),
});

module.exports = signUpSchema;