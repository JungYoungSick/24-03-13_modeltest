from fastapi import FastAPI

app = FastAPI()

@app.get('/')
async def read_root():
    return 

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='localhost', port=3001)

    # source /Users/ms/Desktop/24-03-13_modeltest/ApiServer/myenv/bin/activate
