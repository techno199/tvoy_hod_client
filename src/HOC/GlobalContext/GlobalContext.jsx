import React                        from 'react';
import LkState                      from 'context/LkContext/LkState';
import AuthState                    from 'context/AuthContext/AuthState';
import AdminUserState               from 'context/AdminUserContext/AdminUserState';

const GlobalContext = ({ children }) => {
  return (
      <AuthState>
          <AdminUserState>
              <LkState>
                 {children}
              </LkState>
          </AdminUserState>
      </AuthState>
  )
};

export default GlobalContext;