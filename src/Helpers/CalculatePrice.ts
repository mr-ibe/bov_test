import { GetFarmerPayDto } from "../Dtos/Production";
import { formatCurrency } from "../Utils/FormatCurrency";

const calculatePrice = (monthlyVolume: number, distance: number, month: number): GetFarmerPayDto => {
    let basePrice = 0;
    let costPerKmLessThanEq50 = 0;
    let costPerKmMoreThan50 = 0;
    let productionBonus = 0;


    if (month < 7) {
        basePrice = 1.80;
        costPerKmLessThanEq50 = .05;
        costPerKmMoreThan50 = .06;
        productionBonus = 0

    } else {
        basePrice = 1.95;
        costPerKmLessThanEq50 = 0;
        costPerKmMoreThan50 = 0;
        productionBonus = .01;
    }
    const costPerKm = distance <= 50 ? (costPerKmLessThanEq50 * distance) : (costPerKmMoreThan50 * distance)
    const price = (monthlyVolume * basePrice) - costPerKm + (productionBonus * monthlyVolume)
    const priceFormattedUS = formatCurrency(price, 'en-US', 'USD')
    const priceFormattedBR = formatCurrency(price, 'pt-BR', 'BRL')

    return { priceBr: priceFormattedBR, priceUS: priceFormattedUS }
}

export { calculatePrice }