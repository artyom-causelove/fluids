import * as React from 'react';
import { Image, StyleSheet, Button, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';

export interface Fluid {
  name: string;
  size: string;
  appearance: string;
  density: string;
  vehicleType: string;
  fluidType: string;
  color: string;
  image: string;
}

export default function HandbookScreen() {
  const [fluids, setFluids] = React.useState([] as Fluid[]);
  const [selectedFluid, setSelectedFluid] = React.useState(null as Fluid | null);
  const [action, setAction] = React.useState('list');

  const [name, onChangeName] = React.useState('');
  const [size, onChangeSize] = React.useState('');
  const [appearance, onChangeAppearance] = React.useState('');
  const [density, onChangeDensity] = React.useState('');
  const [vehicleType, onChangeVehicleType] = React.useState('');
  const [fluidType, onChangeFluidType] = React.useState('');
  const [color, onChangeColor] = React.useState('');
  const [image, onChangeImage] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      setFluids([
        {
          name: 'Жидкость ГУР HYUNDAI/KIA PSF-3 - 03100-00100 Объем 1л.',
          size: '1л.',
          appearance: 'прозрачное',
          density: '0.874',
          vehicleType: '4х-тактный',
          fluidType: 'сервисная',
          color: 'красный или коричневый',
          image: 'https://karparauto.ru/published/publicdata/KARPAR/attachments/SC/products_pictures/zhidkost-gur-honda-psf-1-60_pic.jpg'
        },
        {
          name: 'Жидкость ГУР HONDA PSF - 08206-9002 Объем 0,354л.',
          size: '0,354л.',
          appearance: 'прозрачное',
          density: '0.892',
          vehicleType: '4х-тактный',
          fluidType: 'сервисная',
          color: 'светло-желтый',
          image: 'https://karparauto.ru/published/publicdata/KARPAR/attachments/SC/products_pictures/zhidkost-gur-hyundaikia-psf-3-1-2_pic.jpg'
        },
      ])
    }, 2000);
  }, []);

  const create = (fluid: Fluid) => {
    setFluids(fluids.concat(fluid));
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.container, display: action === 'list' ? 'flex' : 'none' }}>
        {fluids.map((fluid, index) => 
          <View style={styles.item} key={index} onTouchEnd={() => { setSelectedFluid(fluid); setAction('details') }}>
            <Image
              style={styles.image}
              source={{
                uri: fluid.image
              }}
            />
            <View style={styles.infoWrapper}>
              <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>{ fluid.name }</Text>
              <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>Объём: { fluid.size }</Text>
              <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>Тип двигателя: { fluid.vehicleType }</Text>
              <Image
              style={styles.cross}
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAdVBMVEX///8dHR0AAAAVFRUUFBQaGhoREREYGBgfHx/d3d3Q0NDU1NTa2tptbW3IyMjLy8sICAi8vLw5OTkjIyMrKys0NDTl5eVqampycnJ4eHiVlZWFhYVBQUGtra2kpKTs7Oy1tbWdnZ2Pj49/f39ERERLS0uYmJiImZGcAAAE6ElEQVR4nO2d21LbMBRFkW9KaYGEkIa2QIG2/P8n1g6hOCSOY++Zbq1JzjMPazT7LEnEks7OhtTt5aA/T6WWWUYEv8hCOeWB19ghxJwGvmywa/CSBb7GrsEjCfwfdg0OyngLmwR+0cYOocyu3EQH1QfsesQrAvgWdmOV9MGX29gh5MmD78RuJqC0wTuwU7fKjmy/N2e64Lfd2M2In7v5OmovdroZ3xOS18pDiuCdLdkCL9OLygHYdVSK1Ea8NyRr8MSm/J6WbIEn1ZzfDsVuRjydjB882ivwZJpzEHZtlUka4Ae2ZAs8iREfjJ2GDgeGZA1u3+UPMMkGuFmHI7GbqDgzPhrbq8NR2X6rPLjAz7NS4DbqcKaB+5pzVkUJ3LaRmOUaeLRFpdKiUn52gYvNGU7g/xncl3F1xKE6zCcu8EfNKnl0ZfxxKk75vuZUuOuoUMGxOrStDtWMz23golWw4OUXF7iY8YkPXOEGg9t0qEbF1pz3og5vbOCaVYq5KyrqiAdXc95TrYIFV61i0+G9CH4Dbc7CBv4ggs9dGX+gLrKwVlHBjROQuMiyNacGXtgWWapVsDq0NeeDapVPJ/BhJesQa5UT+MB6UnXossqTOOLB1ZxPVKtgdSiC+zYSasYXNqto4BUVvLhxZfxFzPjkKxM8t4FjPS6C+6b876pVTuCDwRXuUNl0KIL7dKiCz6Ee982casZtzfksWuWaCr5wReVZ1aGrOUVwn1WwOlTBsRnHWsUIro04NSq+RdbRgs+hUfEtsn5QdSiDu6Kigi9czSmCF5OfJvCj1aFtz4ltzl8i+B0V/NqVceGE+ArctucUR9ynQ9Xjtj2nPHNSm9NmFbU5seBcHbqsIoL7dKh6nDoBcTNus4p0LUwD7hpxFfza1Zwq+JyqQyq4798TslVc4CPuf9sA/00F9414pYEvXM15J12vErI/HmzoeEPzDfUJ1N/QnSZ0fQJdD0LX39D9DnR/Cd3PQ/9/Av1/FfT/g8c5S1JNYsKG/r4D/T0N+vsl9Pfi45zcqSYxfX+imsT0vY/8YZgn29Dv2aDfDx5nS7q+j4V+jwz9/hv6gSl04Qo9TyKf30Fm2yVA6Pk06HlA6PlL6HlX6Pli6AFG6Pl56H0FUAEeJ7br/hPofTNQbOh9StD7q6D3hUHvZ3th3ocnYvtMgrzvEXq/JvQ+U6i3off1Qu9Hht5HDcWG3rcOFSAVm/l+A/S9DKxJkO/BQB8OUk1i+jlVfl+KKUDTNgH6fhr0vTro+4BQAarYzJZ0PfcGfd8V+p4u9P1i6HvR0Pe5oe+hQ9+fV7FdLSkK0IQ9E7NdurAVapsAVeyJydvqUsqELZokmkJSSReU5BOmScIVEjtCR9slQCa2ZpJYmrBzySTRlW1NgJFpkph7sM+ZK0DxYpU8uLCl09fRNtoSeCyc2KPBXQJ8r1EZj6XHJO0acX9aLPzYI8B9AtysgVFxbRO2axC4V4CbNcAqsUoHe8CIu9YkXXVgc8YqLewDwVMb7aaW/eDOpVR39Y54mti9zRljeiF5rb3gcZrmaDe1JyqxunTT7anO5ozTlLE7wVMU4GbtBM8TWG/31Y6Mp7BN6K8tq6Q3ue+uD+BlxsD+kPHUTdKuFjgJuwWe7uS+u9bgsSSNdlMrHcachr0CL1HZfqtllhGxa48ng/0XwHd8e2B8vnQAAAAASUVORK5CYII='
              }}
            />
            </View>
          </View>
        )}
        <Button
          onPress={() => { setAction('create') }}
          title="Create new"
          color="#841584"
          accessibilityLabel="Create new fluid"
        />
      </View>
      <View style={{ ...styles.selectedContainer, display: action === 'details' ? 'flex' : 'none' }}>
        <Image
          style={styles.selectedImage}
          source={{
            uri: selectedFluid?.image
          }}
        />
        <Text ellipsizeMode="tail" numberOfLines={10} style={styles.selectedTitle}>{ selectedFluid?.name }</Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.selectedInfo}>Внешний вид:{ selectedFluid?.appearance }</Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.selectedInfo}>Цвет: { selectedFluid?.color }</Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.selectedInfo}>Объём: { selectedFluid?.size }</Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.selectedInfo}>Тип жидкости: { selectedFluid?.fluidType }</Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.selectedInfo}>Тип двигателя: { selectedFluid?.vehicleType }</Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={{ ...styles.selectedInfo, marginBottom: 30 }}>Плотность (+15 цельсия): { selectedFluid?.density }</Text>
        <Button
          onPress={() => { setSelectedFluid(null); setAction('list') }}
          title="Back"
          color="#841584"
          accessibilityLabel="Back to list"
        />
      </View>
      <View style={{ ...styles.container, display: action === 'create' ? 'flex' : 'none' }}>
        <Button
          onPress={() => { setAction('list') }}
          title="Back"
          color="#841584"
          accessibilityLabel="Back to list"
        />
        <TextInput
          style={{ height: 35, paddingLeft: 10, marginBottom: 6, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginTop: 30 }}
          onChangeText={text => onChangeName(text)}
          value={name}
          placeholder="Name..."
        />
        <TextInput
          style={{ height: 35, paddingLeft: 10, marginBottom: 6, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
          onChangeText={text => onChangeSize(text)}
          value={size}
          placeholder="Size..."
        />
        <TextInput
          style={{ height: 35, paddingLeft: 10, marginBottom: 6, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
          onChangeText={text => onChangeAppearance(text)}
          value={appearance}
          placeholder="Appearance..."
        />
        <TextInput
          style={{ height: 35, paddingLeft: 10, marginBottom: 6, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
          onChangeText={text => onChangeColor(text)}
          value={color}
          placeholder="Color..."
        />
        <TextInput
          style={{ height: 35, paddingLeft: 10, marginBottom: 6, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
          onChangeText={text => onChangeFluidType(text)}
          value={fluidType}
          placeholder="FluidType..."
        />
        <TextInput
          style={{ height: 35, paddingLeft: 10, marginBottom: 6, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
          onChangeText={text => onChangeVehicleType(text)}
          value={vehicleType}
          placeholder="VehicleType..."
        />
        <TextInput
          style={{ height: 35, paddingLeft: 10, marginBottom: 6, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
          onChangeText={text => onChangeDensity(text)}
          value={density}
          placeholder="Density..."
        />
        <TextInput
          style={{ height: 35, paddingLeft: 10, marginBottom: 6, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 40 }}
          onChangeText={text => onChangeImage(text)}
          value={image}
          placeholder="Image..."
        />
        <Button
          onPress={() => { create({
            name,
            size,
            appearance,
            density,
            vehicleType,
            fluidType,
            color,
            image
          } as Fluid); setAction('list') }}
          title="Create"
          color="#841584"
          accessibilityLabel="Create new fluid"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 5
  },
  item: {
    overflow: 'hidden',
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row'
  },
  image: {
    resizeMode: 'contain',
    width: 60,
    height: 120,
    marginRight: 12
  },
  infoWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    width: '100%',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15
  },
  text: {
    width: '100%',
    marginBottom: 2
  },
  cross: {
    resizeMode: 'contain',
    width: 20,
    height: 40,
    marginRight: 5,
    alignSelf: 'flex-end'
  },
  selectedContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 5
  },
  selectedImage: {
    marginTop: 20,
    resizeMode: 'contain',
    height: 240,
  },
  selectedTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 7,
    paddingHorizontal: 10
  },
  selectedInfo: {
    paddingHorizontal: 20,
    fontSize: 16
  },
  backButton: {
    marginTop: 20
  }
});
