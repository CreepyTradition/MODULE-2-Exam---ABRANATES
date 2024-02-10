const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

// Floor
const floorGeometry = new THREE.PlaneGeometry(10, 5);
const floorMaterial = new THREE.MeshBasicMaterial({ color: "Grey", side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);

// Back wall
const backwallGeometry = new THREE.PlaneGeometry(10, 4.2);
const backwallMaterial = new THREE.MeshBasicMaterial({ color: "Salmon", side: THREE.DoubleSide });
const backwall = new THREE.Mesh(backwallGeometry, backwallMaterial);
scene.add(backwall);

// Left wall
const leftwallGeometry = new THREE.PlaneGeometry(10, 4.2);
const leftwallMaterial = new THREE.MeshBasicMaterial({ color: 0xff6666, side: THREE.DoubleSide });
const leftwall = new THREE.Mesh(leftwallGeometry, leftwallMaterial);
scene.add(leftwall);

// Right wall
const rightwallGeometry = new THREE.PlaneGeometry(10, 4.2);
const rightwallMaterial = new THREE.MeshBasicMaterial({ color: 0xff6666, side: THREE.DoubleSide });
const rightwall = new THREE.Mesh(rightwallGeometry, rightwallMaterial);
scene.add(rightwall);

// Window
const windowWidth = 3;
const windowHeight = 2;
const windowDepth = 0.1;

// Window frame
const windowFrameGeometry = new THREE.BoxGeometry(windowWidth, windowHeight, windowDepth);
const windowFrameMaterial = new THREE.MeshBasicMaterial({ color: "Brown" });
const windowFrame = new THREE.Mesh(windowFrameGeometry, windowFrameMaterial);
backwall.add(windowFrame);

// WWindow pane
const windowPaneGeometry = new THREE.PlaneGeometry(windowWidth - 0.2, windowHeight - 0.2);
const windowPaneMaterial = new THREE.MeshBasicMaterial({ color: "LightBlue"});
const windowPane = new THREE.Mesh(windowPaneGeometry, windowPaneMaterial);
windowFrame.add(windowPane); 

// Bed frame
const bedFrameWidth = 2;
const bedFrameHeight = 0.5;
const bedFrameLength = 3;
const bedFrameGeometry = new THREE.BoxGeometry(bedFrameWidth, bedFrameHeight, bedFrameLength);
const bedFrameMaterial = new THREE.MeshBasicMaterial({ color: 0x2e0f13 });
const bedFrame = new THREE.Mesh(bedFrameGeometry, bedFrameMaterial);
scene.add(bedFrame);

// Bed frame outline
const bedFrameEdges = new THREE.EdgesGeometry(bedFrameGeometry);
const bedFrameOutline = new THREE.LineSegments(bedFrameEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 10 }));
bedFrame.add(bedFrameOutline);

// Mattress
const mattressWidth = 1.8;
const mattressHeight = 0.2;
const mattressLength = 2.8;
const mattressGeometry = new THREE.BoxGeometry(mattressWidth, mattressHeight, mattressLength);
const mattressMaterial = new THREE.MeshBasicMaterial({ color: "Blue" });
const mattress = new THREE.Mesh(mattressGeometry, mattressMaterial);
bedFrame.add(mattress);

// Mattress outline
const mattressEdges = new THREE.EdgesGeometry(mattressGeometry);
const mattressOutline = new THREE.LineSegments(mattressEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 10 }));
bedFrame.add(mattressOutline);

// Roof
const roofWidth = 12;
const roofHeight = 5;
const roofGeometry = new THREE.PlaneGeometry(roofWidth, roofHeight);
const roofMaterial = new THREE.MeshBasicMaterial({ color: 0xb93d4c, side: THREE.DoubleSide });
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
scene.add(roof);

// Table
const tableWidth = 2;
const tableHeight = 0.2;
const tableLength = 1.5;
const tableGeometry = new THREE.BoxGeometry(tableWidth, tableHeight, tableLength);
const tableMaterial = new THREE.MeshBasicMaterial({ color: "Brown" });
const table = new THREE.Mesh(tableGeometry, tableMaterial);
scene.add(table);

// Table outline
const tableEdges = new THREE.EdgesGeometry(tableGeometry);
const tableOutline = new THREE.LineSegments(tableEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 10 }));
table.add(tableOutline);

// Table legs
const legWidth = 0.1;
const legHeight = 0.8;
const legGeometry = new THREE.BoxGeometry(legWidth, legHeight, legWidth);
const tableLegMaterial = new THREE.MeshBasicMaterial({ color: "Brown" });

// Front-left leg
const frontLeftLeg = new THREE.Mesh(legGeometry, tableLegMaterial);
frontLeftLeg.position.set(-(tableWidth / 2 - legWidth / 2), -tableHeight / 2 - legHeight / 2, -(tableLength / 2 - legWidth / 2));
table.add(frontLeftLeg);

// Front-right leg
const frontRightLeg = new THREE.Mesh(legGeometry, tableLegMaterial);
frontRightLeg.position.set(tableWidth / 2 - legWidth / 2, -tableHeight / 2 - legHeight / 2, -(tableLength / 2 - legWidth / 2));
table.add(frontRightLeg);

// Back-left leg
const backLeftLeg = new THREE.Mesh(legGeometry, tableLegMaterial);
backLeftLeg.position.set(-(tableWidth / 2 - legWidth / 2), -tableHeight / 2 - legHeight / 2, tableLength / 2 - legWidth / 2);
table.add(backLeftLeg);

// Back-right leg
const backRightLeg = new THREE.Mesh(legGeometry, tableLegMaterial);
backRightLeg.position.set(tableWidth / 2 - legWidth / 2, -tableHeight / 2 - legHeight / 2, tableLength / 2 - legWidth / 2);
table.add(backRightLeg);

// Outline material
const outlineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 10 });

const legOutlines = [];

// Front left leg outline
const frontLeftLegEdges = new THREE.EdgesGeometry(legGeometry);
const frontLeftLegOutline = new THREE.LineSegments(frontLeftLegEdges, outlineMaterial);
frontLeftLeg.add(frontLeftLegOutline);
legOutlines.push(frontLeftLegOutline);

// Front right leg outline
const frontRightLegEdges = new THREE.EdgesGeometry(legGeometry);
const frontRightLegOutline = new THREE.LineSegments(frontRightLegEdges, outlineMaterial);
frontRightLeg.add(frontRightLegOutline);
legOutlines.push(frontRightLegOutline);

// Back left leg outline
const backLeftLegEdges = new THREE.EdgesGeometry(legGeometry);
const backLeftLegOutline = new THREE.LineSegments(backLeftLegEdges, outlineMaterial);
backLeftLeg.add(backLeftLegOutline);
legOutlines.push(backLeftLegOutline);

// Back right leg outline
const backRightLegEdges = new THREE.EdgesGeometry(legGeometry);
const backRightLegOutline = new THREE.LineSegments(backRightLegEdges, outlineMaterial);
backRightLeg.add(backRightLegOutline);
legOutlines.push(backRightLegOutline);

// Cup
const cupRadiusTop = 0.1;
const cupRadiusBottom = 0.05;
const cupHeight = 0.5;
const cupGeometry = new THREE.CylinderGeometry(cupRadiusTop, cupRadiusBottom, cupHeight, 32);
const cupMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const cup = new THREE.Mesh(cupGeometry, cupMaterial);
table.add(cup);

// Cup outline
const cupOutlineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 5 });
const cupEdges = new THREE.EdgesGeometry(cupGeometry);
const cupOutline = new THREE.LineSegments(cupEdges, cupOutlineMaterial);
cup.add(cupOutline);


// Pens and Pencils
const penLength = 0.4;
const pencilLength = 0.5;
const penGeometry = new THREE.BoxGeometry(0.02, penLength, 0.02);
const pencilGeometry = new THREE.BoxGeometry(0.02, pencilLength, 0.02);
const penMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const pencilMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Chair materials
const chairMaterial = new THREE.MeshBasicMaterial({ color: 0x663300 });

// Chair seat
const seatGeometry = new THREE.BoxGeometry(0.5, 0.1, 0.4);
const seat = new THREE.Mesh(seatGeometry, chairMaterial);
scene.add(seat);

// Backrest
const backrestGeometry = new THREE.BoxGeometry(0.52, 0.8, 0.1);
const backrest = new THREE.Mesh(backrestGeometry, chairMaterial);
scene.add(backrest);

// Legs
const chairlegGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 32);
const leg1 = new THREE.Mesh(chairlegGeometry, chairMaterial);
scene.add(leg1);
const leg2 = new THREE.Mesh(chairlegGeometry, chairMaterial);
scene.add(leg2);
const leg3 = new THREE.Mesh(chairlegGeometry, chairMaterial);
scene.add(leg3);
const leg4 = new THREE.Mesh(chairlegGeometry, chairMaterial);
scene.add(leg4);

// Chair outline material
const chairOutlineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 10 });

// Chair seat outline
const seatEdges = new THREE.EdgesGeometry(seatGeometry);
const seatOutline = new THREE.LineSegments(seatEdges, chairOutlineMaterial);
seat.add(seatOutline);

// Backrest outline
const backrestEdges = new THREE.EdgesGeometry(backrestGeometry);
const backrestOutline = new THREE.LineSegments(backrestEdges, chairOutlineMaterial);
backrest.add(backrestOutline);

// Chair legs outline
const chairLegs = [leg1, leg2, leg3, leg4];
const chairLegOutlines = [];

chairLegs.forEach(leg => {
    const legEdges = new THREE.EdgesGeometry(chairlegGeometry);
    const legOutline = new THREE.LineSegments(legEdges, chairOutlineMaterial);
    leg.add(legOutline);
    chairLegOutlines.push(legOutline);
});

// Refrigerator dimensions
const fridgeWidth = 1;
const fridgeHeight = 2;
const fridgeDepth = 0.6;

const fridgeMaterial = new THREE.MeshBasicMaterial({ color: "Silver" });
const fridgeGeometry = new THREE.BoxGeometry(fridgeWidth, fridgeHeight, fridgeDepth);
const fridge = new THREE.Mesh(fridgeGeometry, fridgeMaterial);
scene.add(fridge);

// Outline the refrigerator
const fridgeOutlineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 5 });
const fridgeEdges = new THREE.EdgesGeometry(fridgeGeometry);
const fridgeOutline = new THREE.LineSegments(fridgeEdges, fridgeOutlineMaterial);
fridge.add(fridgeOutline);

// Create handle for the fridge
const handleWidth = 0.1;
const handleHeight = 0.02;
const handleDepth = 0.04;
const handleGeometry = new THREE.BoxGeometry(handleWidth, handleHeight, handleDepth);
const handleMaterial = new THREE.MeshBasicMaterial({ color: "Black" });
const handle = new THREE.Mesh(handleGeometry, handleMaterial);
handle.position.set(-(fridgeWidth / 2 + handleWidth / 2), 0, 0);
fridge.add(handle);

// Add buttons or display panel
const displayPanelWidth = 0.05;
const displayPanelHeight = 0.2;
const displayPanelDepth = 0.05;
const displayPanelGeometry = new THREE.BoxGeometry(displayPanelWidth, displayPanelHeight, displayPanelDepth);
const displayPanelMaterial = new THREE.MeshBasicMaterial({ color: "Black" });
const displayPanel = new THREE.Mesh(displayPanelGeometry, displayPanelMaterial);
displayPanel.position.set(-(fridgeWidth / 2 + displayPanelWidth / 2), 0.5, 0);
fridge.add(displayPanel);


// Object positions
floor.position.y = -2;

backwall.position.y = 0.2;
backwall.position.z = -1;

leftwall.position.x = -4.7;
leftwall.position.y = 0.16;
leftwall.position.z = 1;

rightwall.position.x = 4.7;
rightwall.position.y = 0.16;
rightwall.position.z = 1;

windowFrame.position.set(0, 0, 0); 

windowPane.position.set(0, 0, windowDepth / 2); 

bedFrame.position.y = -1.5;
bedFrame.position.x = -3;
bedFrame.position.z = 1;

mattress.position.y = bedFrameHeight / 2 + mattressHeight / 2;

roof.position.y = 2.5;

table.position.y = -0.9;
table.position.x = 3;
table.position.z = 1;

cup.position.set(0, tableHeight / 2, 0);

const numPens = 5;
for (let i = 0; i < numPens; i++) {
    const pen = new THREE.Mesh(penGeometry, penMaterial);
    pen.position.set(
        Math.random() * 0.1 - 0.05,
        penLength / 2,
        Math.random() * 0.1 - 0.05
    );
    cup.add(pen);
}

const numPencils = 5;
for (let i = 0; i < numPencils; i++) {
    const pencil = new THREE.Mesh(pencilGeometry, pencilMaterial);
    pencil.position.set(
        Math.random() * 0.1 - 0.05, 
        pencilLength / 2,
        Math.random() * 0.1 - 0.05
    );
    cup.add(pencil);
}

seat.position.set(0.8, -0.7, 2);
backrest.position.set(0.87, -0.35, 1.5);
leg1.position.set(0.71, -1.2, 1.2);
leg2.position.set(1.2, -1.2, 1.2);
leg3.position.set(0.73, -1.2, 1.5);
leg4.position.set(1.25, -1.2, 1.5);

fridge.position.set(4, -1, 2.2);

// Object rotations
function animate() {
    requestAnimationFrame(animate);

    // Rotations
    floor.rotation.x = -1.5;

	leftwall.rotation.y = 1.7;
	leftwall.rotation.z = 0;
	leftwall.rotation.x = 0;

	rightwall.rotation.y = -1.7;
	rightwall.rotation.x = 0;
	rightwall.rotation.z = 0;
	
    bedFrame.rotation.x = 0;
	bedFrame.rotation.y = 0;
	bedFrame.rotation.z = 0;

	roof.rotation.x = 1.5;

    renderer.render(scene, camera);
}

animate();
