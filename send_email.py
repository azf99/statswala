import json
import boto3

client = boto3.client('ses', region_name='ap-south-1')

def lambda_handler(event, context):
    print("INSIDE FUNCTION")
    print(event.keys())
    print(event)
    d = json.loads(event['body'])
    print(d)
    user_email = d['email']
    message = d['message']
    name = d['name']
    
    msg = "Name: " + name + "\n" + "Email: " + user_email + "\n" + "Message: " + message + "\n"
    response = client.send_email(
    Destination={
        'ToAddresses': ['info@statswala.in']
    },
    Message={
        'Body': {
            'Text': {
                'Charset': 'UTF-8',
                'Data': msg,
            }
        },
        'Subject': {
            'Charset': 'UTF-8',
            'Data': "New Message from " + name + " via statswala.in",
        },
    },
    Source='azfarlari1999@gmail.com',
    ReplyToAddresses=[user_email]
    )
    
    print(response)
    
    return {
        'statusCode': 200,
        'body': json.dumps("Email Sent Successfully. MessageId is: " + response['MessageId'])
    }