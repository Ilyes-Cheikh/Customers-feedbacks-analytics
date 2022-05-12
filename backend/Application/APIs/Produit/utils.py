from Application.__init__ import ALLOWED_EXTENSIONS

def allowed_file(filename):
        return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS