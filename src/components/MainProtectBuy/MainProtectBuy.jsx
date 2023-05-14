import './MainProtectBuy.css'

export const MainProtectBuy = () => {
    return (
        <div>
            <section>
                <ul className="orderCardInfo">
                    <li className="orderCardInfoLi">
                        <img src="/lc.png" alt="" />
                        <h5>
                            Enviamos tu compra
                        </h5>
                    </li>
                    <li className="orderCardInfoLi">
                        <img src="/tc.png" alt="" />
                        <h5>
                            Paga como quieras
                        </h5>
                    </li>
                    <li className="orderCardInfoLi">
                        <img src="/pc.png" alt="" />
                        <h5>
                            Compra con seguridad
                        </h5>
                    </li>
                </ul>
                <div class="text-success">
                    <hr/>
                </div>
            </section>
        </div>
    )
}
