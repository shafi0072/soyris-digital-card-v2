import { userContext } from '@/src/Storage/ContextApi';
import MyCards from '@/src/component/app/Root/MyCards/MyCards';
import React, { useContext, useEffect } from 'react';
import { baseUrl } from '@/src/config/Server';
import Cookies from 'js-cookie';

const Index = ({ cardsData }) => {
    const { userData, isLoading, setIsLoading } = useContext(userContext);

    useEffect(() => {
        if (userData?.email) {
            Cookies.set('userEmail', userData.email);
        }
        setIsLoading(false);
    }, [userData, setIsLoading]);

    return (
        <div>
            <MyCards userCard={cardsData} />
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const { req } = context;
    const userEmail = req.cookies.userEmail;

    if (!userEmail) {
        return {
            props: {
                cardsData: [],
            },
        };
    }
    const response = await fetch(`${baseUrl}/cards/cards/${userEmail}`);
    const cardsData = await response.json();

    return {
        props: {
            cardsData,
        },
    };
};

export default Index;