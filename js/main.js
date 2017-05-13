// Gallery constructor
var Gallery = function(data){
    this.url = data.url;
    this.alt = data.alt;
    this.index = 0;    
    this.total = data.url.length;    
}

// Gallery Prototype
Gallery.prototype = {
    Constructor: Gallery,
    height: '500px',
    width: '1000px',
    imgSize: '500px',
    gallery: document.createElement('div'),
    container: document.getElementById('galleryContainer'),
    init: function(){
        // Resets the html
        this.reset();

        // Inits the gallery
        this.renderGallery();
       
        // Inits the backward button
        this.backward();

        // Inits the forward button
        this.forward();
    },
    renderGallery: function(){
        this.gallery.style.width = this.width;
        this.gallery.style.height = this.height;
        this.gallery.style.display = 'inline';
        var img = document.createElement('img');
        img.src = this.url[this.index];
        img.alt = this.alt[this.index];
        img.style.width = this.imgSize;
        img.style.height = this.imgSize;
        this.gallery.appendChild(img);       
        this.container.appendChild(this.gallery);    
    },
    backward: function(){
        var i = document.createElement('i');
        var _self = this;        
        i.classList.add('fa','fa-backward');
        i.setAttribute('aria-hidden', 'true');
        i.style.fontSize = '40px';
        i.style.cursor = 'pointer';
        i.addEventListener('click', function(){
            console.log(_self);
            if(_self.index <= 0) {
                _self.index = _self.total-1;
                _self.alt[_self.total-1];                
            }
            else{
                _self.index--; 
                _self.alt[_self.index];                                           
            };
            _self.init();
        })
        this.gallery.insertBefore(i, this.gallery.firstChild);      
    },
    forward: function(){
        var i = document.createElement('i');
        var _self = this;                
        i.classList.add('fa','fa-forward');
        i.setAttribute('aria-hidden', 'true');
        i.style.fontSize = '40px';
        i.style.cursor = 'pointer';
        i.addEventListener('click', function(){
            console.log(_self);
            if(_self.index >= _self.total-1) {
                _self.index = 0;
                _self.alt[0];
            }
            else{
                _self.index++; 
                _self.alt[_self.index];                          
            };
            _self.init();
        })
        this.gallery.appendChild(i);      
    },
    reset: function(){
        this.gallery.innerHTML = '';        
        this.container.innerHTML = '';
    },
    
}
var g1 = new Gallery({
    'url': ['img/tortugas/tortuga1.jpg','img/tortugas/tortuga2.jpg','img/tortugas/tortuga3.jpg','img/tortugas/tortuga4.jpg','img/tortugas/tortuga5.jpg'],
    'alt': ['Imagen de Tortuga1','Imagen de Tortuga2','Imagen de Tortuga3','Imagen de Tortuga4','Imagen de Tortuga5'],
});

g1.init();