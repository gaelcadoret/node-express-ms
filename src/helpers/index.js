/**
 * @param {object} res
 * @param {number} statusCode
 * @param {string} error
 */
export const sendErrorResponse = (res, statusCode, error) => res.status(statusCode).json({
    success: false,
    error,
    timestamp: Date.now()
});

/**
 * @param {object} res
 * @param {object | string | number} data
 * @param {number} statusCode
 */
export const sendSuccessResponse = (res, data, statusCode = 200) => res.status(statusCode).json({
    success: true,
    data,
    timestamp: Date.now()
});
