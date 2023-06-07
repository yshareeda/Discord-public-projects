
import os; os.system("python3 webserver.py & >/dev/null")
import requests
import time



playload = {

    'content': '' # < < SPAM MSG


}

headerst = {

    'authorization': '' # < < Token 1

}

headerst1 = {

    'authorization': '' # < < Token 2

}
headerst2 = {

    'authorization': '' # < < Token 3

}

channel = '' # < < Room Id

url = f'https://discord.com/api/v8/channels/{channel}/messages'


while True:
    requests.post(url, data=playload, headers=headerst, )
    requests.post(url, data=playload, headers=headerst1, )
    requests.post(url, data=playload, headers=headerst2, )
    time.sleep(2) # < < How many msg sand in 1 second
