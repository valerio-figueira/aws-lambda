import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const name = event.queryStringParameters?.name || 'Mundo';

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Olá ${name}, processado em milissegundos!`,
      timestamp: new Date().toISOString(),
    }),
  };
};
