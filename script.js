function calculate() {
    const roofArea = parseFloat(document.getElementById('roofArea').value);
    const wastePercentage = parseFloat(document.getElementById('waste').value);
    const ridges = parseFloat(document.getElementById('ridges').value);
    const hips = parseFloat(document.getElementById('hips').value);
    const eaves = parseFloat(document.getElementById('eaves').value);
    const rakes = parseFloat(document.getElementById('rakes').value);
    const valleys = parseFloat(document.getElementById('valleys').value);
    const intersections = parseFloat(document.getElementById('intersections').value);
    const penetrationsSmall = parseFloat(document.getElementById('penetrationsSmall').value);
    const penetrationsLarge = parseFloat(document.getElementById('penetrationsLarge').value);

    // Calculation logic
    const roofSquares = roofArea / 100;
    const totalRoofSquaresWithWaste = roofSquares + (roofSquares * (wastePercentage / 100));
    const shingles = Math.ceil(totalRoofSquaresWithWaste * 3);
    const hipRidgeShingles = Math.ceil((ridges + hips) / 31);
    const starterShingles = Math.ceil((eaves + rakes) / 140);
    const syntheticFelt = Math.ceil(roofArea / 1000);
    const iceWater = Math.ceil((eaves + valleys) / 66);
    const ridgeVent = Math.ceil(ridges / 4);
    const dripEdge = Math.ceil((rakes + eaves) / 10) + 1;
    const stepFlashing = Math.ceil(intersections * 2);

    document.getElementById('result').innerHTML = `
        <p><strong>Atlas HP 3M Pristine Shingles:</strong> ${shingles} bundles</p>
        <p><strong>Atlas Hip & Ridge Shingles:</strong> ${hipRidgeShingles} bundles</p>
        <p><strong>Atlas HP 42 Starter Shingles:</strong> ${starterShingles} bundles</p>
        <p><strong>Atlas Synthetic Felt:</strong> ${syntheticFelt} rolls</p>
        <p><strong>Atlas WeatherMaster Ice & Water:</strong> ${iceWater} rolls</p>
        <p><strong>Atlas TruRidge All-Weather Ridge Vent:</strong> ${ridgeVent} pieces</p>
        <p><strong>Drip Edge (10' Aluminum):</strong> ${dripEdge} pieces</p>
        <p><strong>Step Flashing (3" x 4" x 7" Aluminum):</strong> ${stepFlashing} pieces</p>
        <p><strong>Roof Flashing Small (1-1/2" - 3"):</strong> ${penetrationsSmall} pieces</p>
        <p><strong>Flashing Retro (PF-GSSR1 Goldenseal 0-3-3/8"):</strong> ${penetrationsLarge} pieces</p>
        <p><strong>Thru-the-Roof Sealant (10.1oz Clear):</strong> Determine amount needed</p>
        <p><strong>Bucket Cap Nails (1-1/4", 3000 Count):</strong> Determine amount needed</p>
        <p><strong>Plastic Cap Bucket (1-1/4", 2500/BKT):</strong> Determine amount needed</p>
    `;
}
