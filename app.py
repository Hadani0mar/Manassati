from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='.')

# عرض واجهة الخريطة
@app.route('/')
def map():
    return send_from_directory('.', 'map.html')

# عرض صور التايلز من tiles داخل src/components
@app.route('/tiles/<z>/<x>/<y>.png')
def tiles(z, x, y):
    tile_path = os.path.join('src', 'components', 'tiles', z, x)
    return send_from_directory(tile_path, f'{y}.png')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
