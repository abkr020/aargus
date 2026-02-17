const mappingData = {
    listShow__list_1: {
        key: "listShow__list_1",
        dev_info: {
            keyPatterrn: "component type then double underscore and then something unique which mapping data do not already have else it will replace the previous value ",
            keyPatternExample: "listShow__<something unique here>",
            text1: "mapping key should starts like this then only it will be mapped to the listShow component",
            mappingCondition: "if anything is being mapped in the elemet list which has the component type as listShow (or showList) the mapping key shoudl have teh pattert starts with component type and then double underscore",

        },
        id: "list_1",
        title: "Vehicle List",
        items: ["vehical one", "v2"],
        children: [
            {
                id: "car_list",
                title: "Car List",
                items: ["XUV500", "Audi", "Thar"],
                children: []
            },
            {
                id: "bike_list",
                title: "Bike List",
                items: [],
                children: [
                    {
                        id: "honda_list",
                        title: "Honda",
                        items: [
                            "Honda Bike 1",
                            "Honda Bike 2",
                            "Honda Bike 3"
                        ],
                        children: []
                    }
                ]
            }
        ]
    }
}
const additemtocenterdiv =()=>{

     if (
        componentType === "listShow" &&
        !/^listShow__.+$/.test(mappingKey)
    ) {
        alert("you can only map the list data to this component");
        return;
    }

    if (
        componentType !== "listShow" &&
        /^listShow__.+$/.test(mappingKey)
    ) {
        alert("list data can only be mapped in list element");
        return;
    }
}