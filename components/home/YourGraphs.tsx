import React from 'react';

import {Card, Heading, Text, VStack} from "@chakra-ui/react";

import CreatorGraphs from "@/components/utilities/graphs/CreatorGraphs";
import AuthProviderButtons from "@/components/utilities/authButtons/AuthProviderButtons";
import Loading from "@/components/utilities/Loading";
import CreateGraph from "@/components/home/CreateGraph";

import useAuth from "@/hooks/useAuth";

const YourGraphs = () => {

    const { user, isLoading } = useAuth();

    return (
        <VStack
            spacing={4}
            alignItems={'flex-start'}
            w={'100%'}
        >
            <Heading>
                Your Subjects
            </Heading>
            <CreateGraph />
            <Loading loading={isLoading}>
                {
                    user ? (
                        <CreatorGraphs creatorId={user.id}/>
                    ) : (
                        <NotLoggedIn />
                    )
                }
            </Loading>
        </VStack>
    );
};


const NotLoggedIn = () => {
    return (
        <Card>
            <Text
                fontSize={{
                    base: 'lg',
                    md: 'xl'
                }}
                fontWeight={'bold'}
            >
                You must be logged in to view your graphs
            </Text>
            <AuthProviderButtons />
        </Card>
    )
}



export default YourGraphs;
