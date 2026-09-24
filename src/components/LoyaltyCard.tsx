import { QRCodeSVG } from "qrcode.react";

interface LoyaltyCardProps {
  businessName: string;
  customerName: string;
  points: number;
  customerId: string;
}

export default function LoyaltyCard({
  businessName,
  customerName,
  points,
  customerId,
}: LoyaltyCardProps) {
  const qrValue = `LOYALTY-${customerId}`;

  return (
    <div className="loyalty-card">

      {/* Encabezado */}
      <div className="loyalty-header">

        <div className="loyalty-brand">
          <div className="loyalty-logo-container">
            <img
              className="loyalty-logo"
              src={`${import.meta.env.BASE_URL}images/Icon.png`}
              alt="Logo del negocio"
            />
          </div>

          <div className="loyalty-business">
            {businessName}
          </div>
        </div>

        <div className="loyalty-member-badge">
          CLIENTE
        </div>

      </div>

      {/* Separador */}
      <div className="loyalty-divider" />

      {/* Tipo de tarjeta */}
      <div className="loyalty-title">
        TARJETA DE LEALTAD
      </div>

      {/* Cliente */}
      <div className="loyalty-customer">
        {customerName}
      </div>

      {/* QR */}
      <div className="loyalty-qr-wrapper">
        <div className="loyalty-qr">
          <QRCodeSVG
            value={qrValue}
            size={155}
            level="M"
          />
        </div>

        <div className="loyalty-scan-text">
          ESCANEA PARA IDENTIFICARTE
        </div>
      </div>

      {/* Puntos */}
      <div className="loyalty-points-section">

        <div className="loyalty-points-label">
          PUNTOS DISPONIBLES
        </div>

        <div className="loyalty-points">
          {points}
        </div>

      </div>

      {/* ID */}
      <div className="loyalty-id">
        ID DE CLIENTE · {customerId}
      </div>

      {/* Imagen inferior */}
      <div className="loyalty-bottom-image">
        <img
          src={`${import.meta.env.BASE_URL}images/loyalty-bottom.png`}
          alt=""
        />
      </div>

    </div>
  );
}