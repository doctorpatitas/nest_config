import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quotation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 120 })
    cliente: string;

    @Column({ type: 'varchar', length: 120 })
    destino: string;

    @Column({ type: 'date' })
    fechaSalida: string;

    @Column({ type: 'date' })
    fechaRegreso: string;

    @Column({ type: 'int' })
    pasajeros: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    valorTotal: number;

    @Column({ type: 'int' })
    asesor: number;

    // @Column()
    // estado: 

    @Column({ type: 'varchar', length: 255, nullable: true })
    motivoRechazo: string | null;

    @Column({ nullable: true })
    creadaEn: Date | null;

    @Column({ nullable: true })
    actualizadaEn: Date | null;
}
