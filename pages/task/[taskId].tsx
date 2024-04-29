import Head from "next/head";

import {NextPageContext} from "next";

import Layout from "@/components/layout";
import Loading from "@/components/utilities/Loading";
import Task from "@/components/task";

const TaskPage = ({ taskId } : {taskId: string}) => {
    return (
        <>
            <Head>
                <title>ChatEDU - Task</title>
                <meta name="description" content="Generative learning"/>
                <meta name="viewport"
                      content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no, user-scalable=0;"/>
                <link rel="icon" href="/logo.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png"/>
                <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon-192x192.png"/>
            </Head>
            <Layout
                authGate
            >
                <Loading
                    loading={!taskId}
                    h={'100%'}
                >
                <Task
                        taskId={parseInt(taskId)}
                    />
                </Loading>
            </Layout>
        </>
    )
}

TaskPage.getInitialProps = async (ctx: NextPageContext) => {
    return {
        taskId: ctx.query.taskId
    };
}

export default TaskPage
