import { Select, SelectCode } from '@corporate/model';

export class LambdaExpression {

    // constructor() { }

    public static getExpressionName(expressionName: any): string {

        const fnStr = expressionName.toString();

        if(fnStr.includes('[')){
            return fnStr.replace('x => x', '').replace(/'/g,'').replace('[','').replace(']','');
        }

        // ES6 class name:
        // "class ClassName { ..."
        if (
            fnStr.startsWith('class ')
            // Theoretically could, for some ill-advised reason, be "class => class.prop".
            && !fnStr.startsWith('class =>')
        ) {
            return this.cleanseAssertionOperators(
                fnStr.substring(
                    'class '.length,
                    fnStr.indexOf(' {')
                )
            );
        }

        // ES6 prop selector:
        // "x => x.prop"
        if (fnStr.includes('=>')) {
            return this.cleanseAssertionOperators(
                fnStr.substring(
                    fnStr.indexOf('.') + 1
                )
            );
        }

        // Invalid function.
        throw new Error('ts-simple-nameof: Invalid function.');
    }

    public static getValue<T>(params: T, functionName: string, value: any): any {
        const properties = functionName.split('.');
        switch(properties.length) {
            case 1:
                params[properties[0]] = value;
                break;
            case 2:
                params[properties[0]][properties[1]] = value;
                break;
            case 3:
                params[properties[0]][properties[1]][properties[2]] = value;
                break;
            case 4:
                params[properties[0]][properties[1]][properties[2]][properties[3]] = value;
                break;
        }

        return params;
    }

    public static getParameters<T>(lambdaExpression: string, parameters: T, value: string | Date | boolean | number | SelectCode | Select): any {
        const functionName = this.getExpressionName(lambdaExpression);
        return this.getValue<T>(parameters, functionName, value);
    }

    private static cleanseAssertionOperators(parsedName: string): string {
        return parsedName.replace(/[?!]/g, '');
    }

}

