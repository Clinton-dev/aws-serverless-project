import boto3
import json

sfn = boto3.client("stepfunctions")


def lambda_handler(event, context):
    sfn.start_execution(
        stateMachineArn="arn:aws:states:us-east-1:657998454848:stateMachine:Sending",
        input=event["body"],
    )

    return {
        "statusCode": 200,
        "body": json.dumps({"Status": "Instruction sent to the Rest API Handler!"}),
    }
