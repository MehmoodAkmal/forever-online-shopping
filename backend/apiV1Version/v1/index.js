import authRouter from "../../routes/auth/user.routes.js";
import productRouter from "../../routes/products/products.routes.js";

const prepareV1Routes = (app) => {
    const prefix = '/api/v1/';

    app.use(`${prefix}auth` , authRouter);
    app.use(`${prefix}products` , productRouter);
}

export default prepareV1Routes;