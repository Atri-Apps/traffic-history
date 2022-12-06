import urllib.request
import json
import os
import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors
def get_channel_statistics():
    key = os.environ.get('YOUTUBE_KEY')
    channel = 'UC1uR2Q5x_8olWS_Y4PdK1Bw'
    data = urllib.request.urlopen(f"https://youtubeanalytics.googleapis.com/v2/reports?dimensions=day%2CinsightTrafficSourceType&endDate=2014-06-30&ids={channel}%3D%3DMINE&metrics=views%2CestimatedMinutesWatched&sort=day%2C-views&startDate=2014-05-01&key={key}").read()

    return json.loads(data)


# def get_analytics():
#     scopes = ["https://www.googleapis.com/auth/youtube.readonly", ]
#     os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"
#
#     api_service_name = "youtubeAnalytics"
#     api_version = "v3"
#     client_secrets_file = "google-sheets.json"
#
#     # Get credentials and create an API client
#     flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(
#         client_secrets_file, scopes)
#     credentials = flow.run_console()
#     youtube_analytics = googleapiclient.discovery.build(
#         api_service_name, api_version, credentials=credentials)
#
#     request = youtube_analytics.reports().query(
#         dimensions="day,insightTrafficSourceType",
#         endDate="2014-06-30",
#         ids="UC1uR2Q5x_8olWS_Y4PdK1Bw",
#         metrics="views,estimatedMinutesWatched",
#         sort="day,-views",
#         startDate="2014-05-01"
#     )
#     response = request.execute()
#
#     print(response)
#
#
#
