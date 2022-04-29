import pickle 

f = open(r'C:\Users\Ilyes\Desktop\PCD\backend\Application\Comment\model.pkl' , 'rb')   
model = pickle.load(f)
c = open(r'C:\Users\Ilyes\Desktop\PCD\backend\Application\Comment\vectorizer.pkl' , 'rb')
vectorizer = pickle.load(c)

def predict(text):
    encoded_text = vectorizer.transform([text])
    prediction = model.predict(encoded_text)
    comment_label = prediction[0]  
    if comment_label == 1 :
        result = "positive"
    if comment_label == -1:
        result = "negative"
    return result

