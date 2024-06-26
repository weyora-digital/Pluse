import React from "react";
import { AuthConsumer } from "../../Providers/authProvider";

export const Logout = () => (
    <AuthConsumer>
        {({ logout }) => {
            logout();
            return <span>loading</span>;
        }}
    </AuthConsumer>
);