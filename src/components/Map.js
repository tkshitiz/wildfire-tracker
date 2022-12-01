import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker' 
import LocationInfoBox from './LocationInfoBox'
import {useState} from 'react'

    const Map = ({eventData,center,zoom}) => {
        const [LocationInfo,setLocationInfo]=useState(null)
        const markers=eventData.map(ev=>{
            if(ev.categories[0].id===8)
            {
                return  <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={()=> setLocationInfo({id:ev.id,title:ev.title})}/>
            }
        })
        return (
            <div className='map'>   
                <GoogleMapReact bootstrapURLKeys={{key:'AIzaSyB61K2TipNrj0-V4UBhL2-Kb15jk1MAoBk'}}
                    defaultCenter={center}
                    defaultZoom={zoom}>
                   {markers}
                    </GoogleMapReact>
                    {LocationInfo && <LocationInfoBox info={LocationInfo}/>}
            </div>
        )
    }
    Map.defaultProps={
        center:{
            lat: 42.3265,
            lng: -122.87
        },
        zoom:6
    }
    
    export default Map;
    