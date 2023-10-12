<template>
<div class="portraits-page">
  <div class="portraits">
    
    <button type="button" data-bs-toggle="modal" data-bs-target="#modal1">
        <div class="card">
            <img class="card-img-top" src="../assets/Images/portraits/nux.jpg" alt="Nux">
            <div class="card-img-overlay">
            <h4 class="card-title">Mad Max - Nux</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal1">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Mad Max: Fury Road - Nux</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="../assets/Images/portraits/nux.jpg" alt="Nux"></div>
            <div v-show="showDescription"><p v-show="showDescription">Insert description here...</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="toggleDescription()">Description</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal2">
        <div class="card">
            <img class="card-img-top" src="../assets/Images/portraits/nux2.jpg" alt="Nux v2">
            <div class="card-img-overlay">
            <h4 class="card-title">Mad Max - Nux</h4>
            </div>
        </div>
         </button>
        <div class="modal" id="modal2">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Mad Max: Fury Road - Nux</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="../assets/Images/portraits/nux2.jpg" alt="Nux"></div>
            <div v-show="showDescription"><p v-show="showDescription">Insert description here...</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="toggleDescription()">Description</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal3">
        <div class="card">
            <img class="card-img-top" src="../assets/Images/portraits/chester_bennington.jpg" alt="Chester Bennington">
            <div class="card-img-overlay">
            <h4 class="card-title">Chester Bennington</h4>
            </div>
        </div>
        </button>
        <div class="modal" id="modal3">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Linkin Park - Chester Bennington</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="../assets/Images/portraits/chester_bennington.jpg" alt="Chester Bennington"></div>
            <div v-show="showDescription"><p v-show="showDescription">Insert description here...</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="toggleDescription()">Description</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal4">
        <div class="card">
            <img class="card-img-top" src="../assets/Images/portraits/eleventh_doctor.jpg" alt="Dr.Who - 11th Doctor">
            <div class="card-img-overlay">
            <h4 class="card-title">Dr.Who - 11th Doctor</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal4">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Doctor Who - 11th Doctor</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="../assets/Images/portraits/eleventh_doctor.jpg" alt="Dr.Who - 11th Doctor"></div>
            <div v-show="showDescription"><p v-show="showDescription">Insert description here...</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="toggleDescription()">Description</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal5">
        <div class="card">
            <img class="card-img-top" src="../assets/Images/portraits/jessica_jones.jpg" alt="Jessica Jones & Kilgrave">
            <div class="card-img-overlay">
            <h4 class="card-title">Jessica Jones & Kilgrave</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal5">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Marvel's Jessica Jones - Jessica Jones & Kilgrave</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="../assets/Images/portraits/jessica_jones.jpg" alt="Jessica Jones & Kilgrave"></div>
            <div v-show="showDescription"><p v-show="showDescription">Insert description here...</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="toggleDescription()">Description</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal6">
        <div class="card">
            <img class="card-img-top" src="../assets/Images/portraits/cutiepiesensei_cosplay.jpg" alt="Cutiepiesensei">
            <div class="card-img-overlay">
            <h4 class="card-title">Cutiepiesensei Cosplay</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal6">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Marvel's Black Panther Cosplay - Cutiepiesensei</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="../assets/Images/portraits/cutiepiesensei_cosplay.jpg" alt="Cutiepiesensei"></div>
            <div v-show="showDescription"><p v-show="showDescription">Insert description here...</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="toggleDescription()">Description</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal7">
        <div class="card">
            <img class="card-img-top" src="../assets/Images/portraits/loki_of_asgard.jpg" alt="Loki">
            <div class="card-img-overlay">
            <h4 class="card-title">Marvel - Loki</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal7">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Marvel's Thor - Loki of Asgard</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="../assets/Images/portraits/loki_of_asgard.jpg" alt="Loki"></div>
            <div v-show="showDescription"><p v-show="showDescription">Insert description here...</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="toggleDescription()">Description</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal8">
        <div class="card">
            <img class="card-img-top" src="../assets/Images/portraits/newly_weds.jpg" alt="Newly Weds Commission">
            <div class="card-img-overlay">
            <h4 class="card-title">Commission - Newly Weds</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal8">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Commission - Newly Weds</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="../assets/Images/portraits/newly_weds.jpg" alt="Newly Weds Commission"></div>
            <div v-show="showDescription"><p v-show="showDescription">Insert description here...</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="toggleDescription()">Description</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal9">
        <div class="card">
            <img class="card-img-top" src="../assets/Images/portraits/tifa_lockhart.jpg" alt="FFVII - Tifa">
            <div class="card-img-overlay">
            <h4 class="card-title">FFVII - Tifa</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal9">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Final Fantasy VII - Tifa Lockhart</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="../assets/Images/portraits/tifa_lockhart.jpg" alt="FFVII - Tifa"></div>
            <div v-show="showDescription"><p v-show="showDescription">Insert description here...</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="toggleDescription()">Description</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal10">
        <div class="card">
            <img class="card-img-top" src="../assets/Images/portraits/aerith_gainsborough.jpg" alt="FFVII - Aerith">
            <div class="card-img-overlay">
            <h4 class="card-title">FFVII - Aerith</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal10">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Final Fantasy VII - Aerith</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="../assets/Images/portraits/aerith_gainsborough.jpg" alt="FFVII - Aerith"></div>
            <div v-show="showDescription"><p v-show="showDescription">Insert description here...</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="toggleDescription()">Description</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>


  </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            showDescription: false,
            showImage: true
        }
    },
    methods: {
        toggleDescription(){
            this.showDescription = !this.showDescription,
            this.showImage = !this.showImage
        },
        resetImg(){
            this.showDescription = false;
            this.showImage = true;
        }
    }
}
</script>

<style scoped>
button{
    border: none;
}
.card img{
    width: 250px;
    height: 310px;
    object-fit: cover;
    border-radius: 10px;
}
.card{
    box-shadow: 0px 5px 20px 0px black;
    border: none;
}
.card:hover{
    border: 3px solid goldenrod;
}
.portraits{
    padding: 4rem;
    display: flex;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
}
.card-img-overlay{
    text-align: center;
    margin-top: 250px;
    background: linear-gradient(transparent, black);
}
.card h4 {
    font-family: Oswald, sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: white;   
}


</style>