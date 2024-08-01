import { NotAuthorizedError } from '../../errors/models/not-authorized-error.model.js';
import { rolePermissions } from '../authorization.service.js';

export const hasRole = (requiredRole) => {
    const requiredRolePermission = rolePermissions[requiredRole] || 0;

    return async (req, res, next) => {
        try {
            const userRole = req.session.role;
            const userPermissionLevel = rolePermissions[userRole] || 0;
    
            if (userPermissionLevel < requiredRolePermission) {
                throw new NotAuthorizedError();
            }
    
            return next();
        } catch (error) {
            next(error);
        }
    }
};
