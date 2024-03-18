from fastapi import FastAPI

app = FastAPI()

@app.get('/')
# @는 데코레이터 라는 프로그래밍 기법의 일부로 함수에 추가기능을 제공 시 사용.
async def read_root():
    return 

if __name__ == '__main__':
# 현재 코드가 직접 실행될 때만 아래 코드를 실행하라.
# 현재 코드가 다른 모듈에서 import될 때는 아래 코드를 실행하지 마라.
# if __name__ == '__main__': 
# 이 작성된 이유.
    import uvicorn
    # uvicorn은 python 웹 개발을 위한 ASGI서버이다. ASGI는 비동기 웹 프레임 워크를 위한 표준 인터페이스이며, Uvicorn은 FastAPI와 같은 ASGI 프레임워크와 함께 사용하도록 설계됨.
    uvicorn.run(app, host='localhost', port=3001)

