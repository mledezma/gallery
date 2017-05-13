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
    init: function(){
        // Inits the gallery
        this.renderGallery();
       
        // Inits the backward button
        this.backward(this.renderGallery);

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
        document.body.appendChild(this.gallery);    
    },
    backward: function(renderGallery){
        var i = document.createElement('i');
        i.classList.add('fa','fa-backward');
        i.setAttribute('aria-hidden', 'true');
        i.style.fontSize = '40px';
        i.style.cursor = 'pointer';
        i.addEventListener('click', function( _self){
            //Currently not working
            this.index--;
            if(this.index <= 0){
                this.index = this.total-1;
            };
            console.log(renderGallery)          
            this.renderGallery();
        })
        this.gallery.insertBefore(i, this.gallery.firstChild);      
    },
    forward: function(){
        var i = document.createElement('i');
        i.classList.add('fa','fa-forward');
        i.setAttribute('aria-hidden', 'true');
        i.style.fontSize = '40px';
        i.style.cursor = 'pointer';
        i.addEventListener('click', function(){
            this.index--;
            this.renderGallery();
        })
        document.body.appendChild(i);      
    },
    
}

var obj = {
    'url': ['http://cdn01.ib.infobae.com/adjuntos/162/imagenes/014/014/0014014674.jpg','https://lh4.googleusercontent.com/eHuqFM1kf010LnscLCvuEWjworpb1TO7-1CLwcIXsmDb-0yxqWwOHFDzBKHal056Ughq3anz1ipCutjacHQ2Mc3dQQ67D37FN2VnvobKK53q5e2SAhw4CKsWIMT-UgyuDdc2e4o'],
    'alt': ['Imagen de Hamster','Imagen de cachorro de tigre'],
}

var g1 = new Gallery(obj);
g1.init();
console.log(g1);