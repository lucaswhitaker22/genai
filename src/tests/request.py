import requests
from requests.structures import CaseInsensitiveDict

url = "http://localhost:3000/ai/generate"

headers = CaseInsensitiveDict()
headers["Content-Type"] = "application/json"

data = """
{
  "prompt":"Camel with wings",
  "n":1
}
"""


resp = requests.post(url, headers=headers, data=data)

print(resp.status_code)