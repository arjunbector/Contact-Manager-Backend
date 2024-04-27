import jwt from "jsonwebtoken";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const validateToken = async (req, res, next) => {
  try {
    const header = req.headers.autohorization || req.headers.Authorization;
    const accessToken = req.cookies?.accessToken || header?.split(" ")[1];
    if (!accessToken) {
      throw new ApiError(401, "Unauthorized");
    }

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        throw new ApiError(401, "Unauthorized");
      } else {
        req.user = decoded;
        return next();
      }
    });
  } catch (err) {
    console.log(err);
    return res
      .status(err.statusCode || 500)
      .json(new ApiResponse(err.statusCode || 500, err.message, null));
  }
};

export default validateToken;