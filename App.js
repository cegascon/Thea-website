document.addEventListener('DOMContentLoaded', function() {
    const commodities = ['hydrogen', 'ammonia', 'natural gas', 'electricity', 'fuels', 'chemicals'];
    let commoditiesIndex = 0;
    const commoditySpan = document.getElementById('commodity');

    function updateCommodity() {
        commoditySpan.textContent = commodities[commoditiesIndex];
        commoditiesIndex = (commoditiesIndex + 1) % commodities.length;
    }

    updateCommodity(); 

    setInterval(updateCommodity, 2000); 
});
