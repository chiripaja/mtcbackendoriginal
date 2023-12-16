const {response}=require('express')
const PobladoDTO = require('../models/PobladoDTO')
const { sequelize } = require('../sequilize/sequilize')
const { QueryTypes } = require('sequelize')


const findByUbigeo=async(req,res=response)=>{
    try {
        const response=await PobladoDTO.findAll({           
            where: {
                ubigeo:req.params.id
            }
          })
          console.log(response)
          res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const findall=async(req,res)=>{
    try {
        const response=await PobladoDTO.findAll()
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const findbyid=async(req,res)=>{
    try {
        const response=await PobladoDTO.findByPk(req.params.id)
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}


const findByUbigeoName=async(req,res=response)=>{
    try {
        const response=await PobladoDTO.findAll({   
            attributes: ['id','centro_poblado'],        
            where: {
                ubigeo:req.params.id
            },
            order: [['centro_poblado', 'ASC']]
          })
          console.log(response)
          res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const findAllReporte=async(req,res)=>{
    try{        
        const response= await sequelize.query("SELECT cp.id,p.provincia,d.distrito,cp.centro_poblado,cp.categoria,cp.ubigeo_ccpp, cp.longitud,cp.latitud,cp.poblacion, cp.vivienda, cp.agua, cp.electricidad, cp.desague, cp.via_mayor_uso, cp.transporte_mayor_uso, cp.frecuencia, cp.tiempo_capital, cp.distancia_capital, cp.distancia_centro_poblado_educativo, cp.distancia_centro_salud_cerca, cp.alumbrado_publico, cp.telefono_publico, cp.local_comunal, cp.hostal, cp.estacion_radio, cp.iiee_primaria, cp.iiee_secundaria, cp.puesto_salud, cp.puesto_policial, cp.oficina_correo, cp.cabina_internet, cp.heladas_nevadas, cp.granizadas, cp.lluvias, cp.sequias, cp.vendavales, cp.inundaciones, cp.derrumbes, cp.huaycos, cp.desertificaciones, cp.salinizaciones, cp.volcan, cp.sismo, cp.tsunami, cp.fenomeno_nat, cp.derrame_sustancias, cp.gases_toxicos, cp.explosiones, cp.incendios, cp.crianza_animales, cp.zona_industrial, cp.zonas_aeroportuarias, cp.relleno_sanitario, cp.subversiones, cp.otro_peligro, cp.rio_quebrada, cp.cuartel_militar, cp.via_ferrea, cp.erosion, cp.precipicios, cp.otros, cp.pistas_veredas, cp.canales_drenaje, cp.idioma_lengua, cp.altitud, cp.url  FROM centros_poblados_detalles cp INNER JOIN distritos d on cp.ubigeo=d.codigo inner join provincias p on p.codigo=d.idprovincia", 
        { 
            
            type: QueryTypes.SELECT 
        });
        res.status(200).json(response)
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    findByUbigeo,
    findall,
    findbyid,
    findByUbigeoName,
    findAllReporte
}