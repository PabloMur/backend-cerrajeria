// app/api/cerrajeria/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseConn"; // ajustá la ruta según tu proyecto

export async function GET() {
  try {
    const snapshot = await db.collection("cerrajeria").limit(1).get(); // solo 1 doc
    if (snapshot.empty) {
      return NextResponse.json({ data: null });
    }

    const doc = snapshot.docs[0];
    return NextResponse.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    console.error("Error leyendo Firestore:", error);
    return NextResponse.json({ error: "No se pudieron traer los datos" }, { status: 500 });
  }
}

export async function PUT() {
  try {
    const snapshot = await db.collection("cerrajeria").limit(1).get();
    if (snapshot.empty) {
      return NextResponse.json({ error: "No hay documento para actualizar" }, { status: 404 });
    }

    const docRef = snapshot.docs[0].ref;
    const currentValue = snapshot.docs[0].data().servicio;

    await docRef.update({ servicio: !currentValue }); // cambia true <-> false

    return NextResponse.json({ message: "Estado actualizado", servicio: !currentValue });
  } catch (error) {
    console.error("Error actualizando Firestore:", error);
    return NextResponse.json({ error: "No se pudo actualizar el estado" }, { status: 500 });
  }
}
