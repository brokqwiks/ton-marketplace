import pytest
from fastapi.testclient import TestClient
import app

client = TestClient(app.app)

@pytest.fixture
def mnemonic_data():
    return {
        "mnemonicFile": "somefile",
        "mnemonicLength": 12
    }

@pytest.fixture
def private_key(mnemonic_data):
    response = client.post("/generate/private_key", json=mnemonic_data)
    assert response.status_code == 200
    private_key = response.json()["private_key"]
    return private_key

def test_generate_mnemonic():
    response = client.get("/generate/mnemonic")
    assert response.status_code == 200
    assert "mnemonic" in response.json()

def test_generate_private_key(mnemonic_data):
    response = client.post("/generate/private_key", json=mnemonic_data)
    assert response.status_code == 200
    assert "private_key" in response.json()

def test_generate_public_key(private_key):
    private_key_data = {
        "private_key": private_key
    }
    response = client.post("/generate/public_key", json=private_key_data)
    assert response.status_code == 200
    assert "public_key" in response.json()

def test_generate_keys():
    response = client.get("/generate/keys")
    assert response.status_code == 200
    json_response = response.json()
    assert "privateKey" in json_response
    assert "publicKey" in json_response

