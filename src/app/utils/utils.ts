export class ExtratorDeCor {
    public static analizarImagem(url: string): Promise<number[]> {
        return new Promise((resolve, reject) => {
            const imagem = new Image();

            imagem.crossOrigin = 'Anonymous';
            imagem.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = imagem.width;
                canvas.height = imagem.height;
                ctx?.drawImage(imagem, 0, 0);

                const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData?.data;
                const colorCount: { [key: string]: number } = {};

                let maxCount = 0;
                let corPredominante = [31.5, 31.5, 31.5];

                if (data) {
                    for (let i = 0; i < data.length; i += 4) {
                        const r = data[i];
                        const g = data[i + 1];
                        const b = data[i + 2];
                        const colorKey = `${r}, ${g}, ${b}`;

                        const luminancia = 0.2126 * r + 0.7152 * g + 0.0722 * b;
                        
                        if(luminancia < 171 && luminancia > 20){
                            colorCount[colorKey] = (colorCount[colorKey] || 0) + 1;
                            
                            if(colorCount[colorKey] > maxCount) {
                                maxCount = colorCount[colorKey];
                                corPredominante = [r, g, b];
                            }
                        }
                    }
                }
                canvas.remove();
                
                resolve(corPredominante);
            };
            imagem.onerror = () => {
                resolve([31.5, 31.5, 31.5]);
            };
            imagem.src = url;
        });
    }
}