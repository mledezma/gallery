// Gallery constructor
var Gallery = function(data){
    this.url = data.url;
    this.alt = data.alt;
    this.index = 0;    
    this.total = data.url.length;   
    this.gallery = document.createElement('div');     
}

// Gallery Prototype
Gallery.prototype = {
    Constructor: Gallery,
    height: '500px',
    width: '1000px',
    imgSize: '500px',
    container: document.createElement('div'),
    init: function(){
        // Resets the html
        this.reset();

        // Inits the gallery
        this.renderGallery();
       
        // Inits the backward button
        this.backward();

        // Inits the forward button
        this.forward();

        // Inits the counter
        this.renderCounter();
    },
    renderGallery: function(){
        this.gallery.style.width = this.width;
        this.gallery.style.height = this.height;
        this.gallery.style.display = 'inline';
        // Create Image
        var img = document.createElement('img');
        img.src = this.url[this.index];
        img.alt = this.alt[this.index];
        img.style.width = this.imgSize;
        img.style.height = this.imgSize;
        this.gallery.appendChild(img);       
        this.container.appendChild(this.gallery); 
        document.body.appendChild(this.container);
        console.log(this.container.getElementsByTagName('div').length)
    },
    backward: function(){
        var i = document.createElement('i');
        var _self = this;        
        i.classList.add('fa','fa-backward');
        i.setAttribute('aria-hidden', 'true');
        i.style.fontSize = '40px';
        i.style.cursor = 'pointer';
        i.style.marginRight = '30px';        
        i.addEventListener('click', function(){
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
        i.style.marginLeft = '30px';
        i.addEventListener('click', function(){
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
    renderCounter: function(){
        var p = document.createElement('p');
        p.innerHTML = this.index+1 + ' / ' + this.total;
        p.style.marginLeft = '300px';
        this.gallery.appendChild(p);
    },
    reset: function(){
        this.gallery.innerHTML = '';    
    },
    
    
}
var g1 = new Gallery({
    'url': ['img/tortugas/tortuga1.jpg','img/tortugas/tortuga2.jpg','img/tortugas/tortuga3.jpg','img/tortugas/tortuga4.jpg','img/tortugas/tortuga5.jpg'],
    'alt': ['Imagen de Tortuga1','Imagen de Tortuga2','Imagen de Tortuga3','Imagen de Tortuga4','Imagen de Tortuga5']
});
g1.init();

var g2 = new Gallery({
    'url': ['img/animales/owl.jpg','img/animales/elefant.jpg','img/animales/bear.jpg','img/animales/black-leopard.jpg','img/animales/turtle.jpg',],
    'alt': ['Imagen de un buho','Imagen de un elefante','Imagen de un oso','Imagen de un leopardo negro','Imagen de una tortuga']  
});
g2.init();
